using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
   public class Job
    {
        public int JobId { get; set; }
        public Nullable<System.DateTime> JobDateAdv { get; set; }
        public Nullable<int> JobAreaId { get; set; }
        public Nullable<int> JobCityId { get; set; }
        public Nullable<int> JobSubId { get; set; }
        public string JobRole { get; set; }
        public Nullable<int> JobPartId { get; set; }
        public Nullable<int> JobPartOutNetId { get; set; }
        public Nullable<int> JobWorkspaceId { get; set; }
        public Nullable<int> JobExperience { get; set; }
        public Nullable<int> JobCVId { get; set; }
        public Nullable<int> JobOfferId { get; set; }
        public Nullable<int> JobStars { get; set; }
        public Nullable<int> JobBossId { get; set; }
        public Nullable<bool> JobStatus { get; set; }
        public Nullable<System.DateTime> JobDateCaughtJob { get; set; }
        public Nullable<bool> JobIsByUs { get; set; }

        public virtual Area Area { get; set; }
        public virtual Boss Boss { get; set; }
        public virtual City City { get; set; }
        public virtual OutNet OutNet { get; set; }
        public virtual Part Part { get; set; }
        public virtual SubjectJob SubjectJob { get; set; }
        public virtual Workspace Workspace { get; set; }
        public virtual List<PutInJob> PutInJob { get; set; }
        public virtual List<Sign> Sign { get; set; }
        public static Entities.Job JobEntities(DAL.Job j)
        {
            return new Entities.Job()
            {
                JobAreaId = j.JobAreaId,
                JobBossId = j.JobBossId,
                JobCityId = j.JobCityId,
                JobCVId= j.JobCVId,
                JobDateAdv = j.JobDateAdv,
                JobDateCaughtJob = j.JobDateCaughtJob,
                JobExperience = j.JobExperience,
                JobId = j.JobId,
                JobIsByUs = j.JobIsByUs,
                JobOfferId = j.JobOfferId,
                JobPartId = j.JobPartId,
                JobPartOutNetId = j.JobPartOutNetId,
                JobRole = j.JobRole,
                JobStars = j.JobStars,
                JobStatus = j.JobStatus,
                JobSubId = j.JobSubId,
                JobWorkspaceId = j.JobWorkspaceId

            };
        }
        public static DAL.Job JobDAL(Entities.Job j)
        {
            return new DAL.Job()
            {
                JobAreaId = j.JobAreaId,
                JobBossId = j.JobBossId,
                JobCityId = j.JobCityId,
                JobCVId = j.JobCVId,
                JobDateAdv = j.JobDateAdv,
                JobDateCaughtJob = j.JobDateCaughtJob,
                JobExperience = j.JobExperience,
                JobId = j.JobId,
                JobIsByUs = j.JobIsByUs,
                JobOfferId = j.JobOfferId,
                JobPartId = j.JobPartId,
                JobPartOutNetId = j.JobPartOutNetId,
                JobRole = j.JobRole,
                JobStars = j.JobStars,
                JobStatus = j.JobStatus,
                JobSubId = j.JobSubId,
                JobWorkspaceId = j.JobWorkspaceId

            };
        }
    }
}
