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
    public class SpotifyContrroller
    {
        public SpotifyContrroller()
        {
        }

        [HttpGet]
        public List<TrackInfo> SearchTrack(string query)
        {
            return Spotify.Search(query);
        }
    }
}
