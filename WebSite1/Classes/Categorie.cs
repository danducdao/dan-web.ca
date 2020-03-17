using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite1.Classes
{
    public class Categorie
    {
        [JsonProperty("CategoryName")]
        public string CategoryName { get; set; }
    }
}