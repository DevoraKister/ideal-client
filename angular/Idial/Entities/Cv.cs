using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    class Cv
    {



        public int CvId { get; set; }
        public string CvLink { get; set; }
        public Nullable<int> CvUserId { get; set; }

        public virtual List<Job> Job { get; set; }

    }
}
