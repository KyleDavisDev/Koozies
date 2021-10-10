using KyleKoozies.Interfaces;

namespace KyleKoozies.Classes
{
    public class Koozie : IKoozie
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public Images Images { get; set; }
        public int DateUploaded { get; set; }
        public int DateEdited { get; set; }
    }
}