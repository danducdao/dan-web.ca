using Newtonsoft.Json;
using System;

namespace WebSite1.Classes
{
    public class Product
    {
        [JsonProperty("ProductName")]
        public string ProductName { get; set; }
        [JsonProperty("UnitPrice")]
        public decimal UnitPrice { get; set; }
        [JsonProperty("UnitsInStock")]
        public Int16? UnitsInStock { get; set; }
        [JsonProperty("Categorie")]
        public Categorie Categorie { get; set;}
        [JsonProperty("Supplier")]
        public Supplier Supplier { get; set; }
       
    }
}