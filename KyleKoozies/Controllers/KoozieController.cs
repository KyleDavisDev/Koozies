using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using KyleKoozies.Classes;
using Microsoft.AspNetCore.Mvc;
// using Newtonsoft.Json;
using System.Text.Json;
using KyleKoozies.Interfaces;

namespace KyleKoozies.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KoozieController : Controller
    {
        // GET
        [HttpGet]
        [Route("/api/koozies/latest")]
        public IEnumerable<IKoozie> Latest()
        {
            var myJsonString = System.IO.File.ReadAllText("./Koozies.json");
            var myJObject = JsonSerializer.Deserialize<KooziesJSON>(myJsonString);

            return myJObject?.Koozies.OrderBy(x => x.DateEdited == 0 ? x.DateUploaded : x.DateEdited).Take(3);
        }
    }
}