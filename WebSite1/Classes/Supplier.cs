using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite1.Classes
{
    public class Supplier
    {
        [JsonProperty("CompanyName")]
        public string CompanyName { get; set; }
    }
}