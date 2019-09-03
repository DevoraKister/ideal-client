using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
   public class Boss
    {
        public int BossId { get; set; }
        public string BossName { get; set; }
        public string BossTel { get; set; }
        public Nullable<int> BossCityId { get; set; }
        public string BossMail { get; set; }
        public string BossStreet { get; set; }
        public Nullable<int> BossStars { get; set; }
        public Nullable<int> BossSubId { get; set; }
        public string password { get; set; }
        public virtual City City { get; set; }
        public virtual SubjectJob SubjectJob { get; set; }
       
        public virtual List<Job> Job { get; set; }
      
        public virtual List<Recomend> Recomend { get; set; }
        public static Entities.Boss BossEntities(DAL.Boss b)
        {
            return new Entities.Boss()
            {
                BossCityId = b.BossCityId,
                BossMail = b.BossMail,
                BossId = b.BossId,
                BossName = b.BossName,
                BossStars = b.BossStars,
                BossStreet = b.BossStreet,
                BossSubId = b.BossSubId,
                BossTel = b.BossTel,
                password=b.BossPassword
                


            };
        }

        public static DAL.Boss BossDAL(Entities.Boss b)
        {
            return new DAL.Boss()
            {
                BossCityId = b.BossCityId,
                BossMail = b.BossMail,
                BossId = b.BossId,
                BossName = b.BossName,
                BossStars = b.BossStars,
                BossStreet = b.BossStreet,
                BossSubId = b.BossSubId,
                BossTel = b.BossTel,
                BossPassword=b.password


            };
        }
    }
}
