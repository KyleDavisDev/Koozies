using System.Collections.Generic;
using KyleKoozies.Interfaces;

namespace KyleKoozies.Classes
{
    public class KooziesJSON
    {
        public KooziesJSON()
        {
            Koozies = new List<Koozie>();
        }

        public List<Koozie> Koozies { get; set; }
    };
    
}