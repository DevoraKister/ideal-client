using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public static class UserLogic
    {
        public static bool CheckIsLogin(Entities.User u)
        {
            List<Entities.User> user = new List<Entities.User>();
            var x = user.FirstOrDefault(c => c.UserName == u.UserName && c.UserPassword == u.UserPassword);
            if (x == null)
                return false;
            return true;
        }
    }
}
