using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using WebSite1.Classes;
using WebSite1.Extension;

namespace WebSite1.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public async Task<ActionResult> Index(int page = 0)
        {
            var products = new List<Product>();
            IEnumerable<Product> results = null;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://webapi.com/");
                var responseTask = client.GetAsync("product");
                responseTask.Wait();
                var result = responseTask.Result;
                if (result.IsSuccessStatusCode)
                {
                    string data = await result.Content.ReadAsStringAsync();
                    JavaScriptSerializer JSserializer = new JavaScriptSerializer();
                    products = JSserializer.Deserialize<List<Product>>(data);
                    int pageSize = 10;
                    int totalPages = (int)Math.Ceiling((decimal)products.Count() / (decimal)pageSize);
                    ViewBag.TotalPages = totalPages;
                    ViewBag.Page = page;
                    results = products.Page(page, pageSize); 
                }                           
            }
            return View(results);
        }
    }
}