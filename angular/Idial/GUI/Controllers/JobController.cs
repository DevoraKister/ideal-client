using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GUI.Controllers
{
    [RoutePrefix("Job/api")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class JobController : ApiController
    {
        [Route("getParts")]
        [HttpGet]
        public IHttpActionResult GetAllPart()
        {
            return Ok(BL.SelectorJob.getPart());
        }
        [Route("getArea")]
        [HttpGet]
        public IHttpActionResult getArea()
        {
            return Ok(BL.SelectorJob.getArea());
        }
        [Route("getCity")]
        [HttpPost]
        public IHttpActionResult getCity([FromBody]int AreaId)
        {
            return Ok(BL.SelectorJob.getCity(2));
        }
        [Route("getSubjectJob")]
        [HttpGet]
        public IHttpActionResult getSubjectJob()
        {
            return Ok(BL.SelectorJob.getSubjectJob());
        }


        [Route("h")]
        [HttpGet]
        public IHttpActionResult h()
        {
            return Ok("kjlhuih");
        }
    }
}
