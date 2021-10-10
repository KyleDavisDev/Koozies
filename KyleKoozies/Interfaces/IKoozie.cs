using KyleKoozies.Classes;

namespace KyleKoozies.Interfaces
{
    public interface IKoozie
    {
        string Name { get; set; }
        string Description { get; set; }
        Images Images { get; set; }
        int DateUploaded { get; set; }
        int DateEdited { get; set; }
    }
}