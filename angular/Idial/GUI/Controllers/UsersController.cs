using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GUI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        [Route("login")]
        [HttpPost]
        public bool Login([FromBody] Entities.User user)
        {
            return BL.UserLogic.CheckIsLogin(user);
            
        }
    }
}
