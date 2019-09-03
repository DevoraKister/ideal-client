using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class SelectorJob
    {
        public static DAL.IdialEntities3 db = new DAL.IdialEntities3();
        public static List<Entities.Part> getPart()
        {
           List<Entities.Part> parts = new List<Entities.Part>();
            var h = db.Part.ToList();
            foreach (var item in h)
            {
               
                parts.Add(Entities.Part.PartEntities(item));
            }
            return parts;
           //return db.areas();
        }
        

        public static List<Entities.Area> getArea()
        {
            List<Entities.Area> areas = new List<Entities.Area>();
            foreach (var item in db.Area.ToList())
            {
                areas.Add(Entities.Area.AreaEntities(item));
            }
            return areas;

        }
        public static List<Entities.City> getCity(int areaId)
        {
            List<Entities.City> cities = new List<Entities.City>();
            foreach (var item in db.City.ToList())
            {
                cities.Add(Entities.City.CityEntities(item));
            }

            cities = cities.Where(p => p.CityAreaId== areaId).ToList();
            return cities;

        }
        public static List<Entities.SubjectJob> getSubjectJob()
        {
            List<Entities.SubjectJob> subjectJob = new List<Entities.SubjectJob>();
            foreach (var item in db.SubjectJob.ToList())
            {
                subjectJob.Add(Entities.SubjectJob.SubjectJobEntities(item));
            }
            return subjectJob;

        }





        //public static List<Entities.Part> getParts()
        //{
        //    using (SqlConnection connection = new SqlConnection("Idial"))
        //    {
        //       return db.parts
        //          }

        //}
    }
}
