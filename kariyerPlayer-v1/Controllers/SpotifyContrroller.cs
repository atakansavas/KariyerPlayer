using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using kariyerPlayer.business;
using KariyerPlayer.Client.Entities;


namespace kariyerPlayer_v1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SpotifyController : ControllerBase
    {

        private readonly ILogger<SpotifyController> _logger;

        public SpotifyController(ILogger<SpotifyController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<TrackInfo> Get(string query)
        {
            if (string.IsNullOrEmpty(query))
            {
                return new List<TrackInfo>();
            }

            return Spotify.Search(query);
        }
    }
}
