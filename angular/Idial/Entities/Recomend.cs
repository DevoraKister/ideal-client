using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
  public  class Recomend
    {
        public int RecomendId { get; set; }
        public Nullable<int> RecomendUserId { get; set; }
        public Nullable<int> RecomemdBossId { get; set; }
        public string RecomendInfo { get; set; }

        public virtual Boss Boss { get; set; }
        public virtual User User { get; set; }
        public static Entities.Recomend RecomendEntities(DAL.Recomend r)
        {
            return new Entities.Recomend()
            {
                RecomemdBossId = r.RecomemdBossId,
                RecomendId = r.RecomendId,
                RecomendInfo = r.RecomendInfo,
                RecomendUserId = r.RecomendUserId

            };
        }
        public static DAL.Recomend RecomendDAL(Entities.Recomend r)
        {
            return new DAL.Recomend()
            {
                RecomemdBossId = r.RecomemdBossId,
                RecomendId = r.RecomendId,
                RecomendInfo = r.RecomendInfo,
                RecomendUserId = r.RecomendUserId
            };
        }
    }
}
