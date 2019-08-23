using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace complete_blazor_sample.Model
{
    public class ListDataModel
    {
        public string Id { get; set; }
        public string Text { get; set; }
        public List<ListDataModel> Child { get; set; }
        public Dictionary<string, object> HtmlProperties { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }
        public string Class { get; set; }
        public string Category { get; set; }
        public int Order { get; set; }
        public string ImgUrl { get; set; }
        public string Icon { get; set; }
    }
}
