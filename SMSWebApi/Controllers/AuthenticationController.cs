using SMSWebApi.Dataobjects;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SMSWebApi.Controllers
{
    public class AuthenticationController : ApiController
    {
        // GET api/values
        [HttpPost]
        public HttpResponseMessage Authenticate(string Username, string Password)
        {
            return Request.CreateResponse<LoginDetail>(HttpStatusCode.OK, new LoginDetail() { Username = Username, LastLoggedIn = DateTime.Now });
        }

    }
}