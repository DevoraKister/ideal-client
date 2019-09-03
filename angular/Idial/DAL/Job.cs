//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Job
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Job()
        {
            this.PutInJob = new HashSet<PutInJob>();
            this.Sign = new HashSet<Sign>();
        }
    
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
        public virtual Cv Cv { get; set; }
        public virtual OutNet OutNet { get; set; }
        public virtual Part Part { get; set; }
        public virtual SubjectJob SubjectJob { get; set; }
        public virtual Workspace Workspace { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PutInJob> PutInJob { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Sign> Sign { get; set; }
    }
}
