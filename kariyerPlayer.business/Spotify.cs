using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using kariyerPlayer.business.Models;
using KariyerPlayer.Client.Entities;
using Newtonsoft.Json;
using SpotifyAPI.Web;
using SpotifyAPI.Web.Auth;
using SpotifyAPI.Web.Enums;
using SpotifyAPI.Web.Models;
using Unosquare.Swan.Formatters;

namespace kariyerPlayer.business
{
    /// <summary>
    /// This class is bridge between spotify and kariyer player.
    /// It makes web request for web.
    /// </summary>
    public static class Spotify
    {
        private static SpotifyWebAPI _api { get; set; }

        /// <summary>
        /// This method for initialize spotify class.
        /// </summary>
        public static void Init()
        {
            var request = (HttpWebRequest)WebRequest.Create(Const.TokenUrl);
            var body = "grant_type=client_credentials";
            var data = Encoding.ASCII.GetBytes(body);

            request.Method = "POST";
            request.ContentType = "application/x-www-form-urlencoded";
            request.ContentLength = data.Length;

            request.Headers.Add("Authorization", Const.AuthHeader);

            using (var stream = request.GetRequestStream())
            {
                stream.Write(data, 0, data.Length);
            }

            var response = (HttpWebResponse)request.GetResponse();

            var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();

            var tokenResponse = JsonConvert.DeserializeObject<TokenResponse>(responseString);

            _api = new SpotifyWebAPI
            {
                AccessToken = tokenResponse.access_token,
                TokenType = tokenResponse.token_type
            };
        }

        public static List<TrackInfo> Search(string query)
        {
            var apiResult = _api.SearchItems(query, SearchType.Track);
            var trackList = apiResult.Tracks.Items.Select(p => new TrackInfo
            {
                AlbumName = p.Album.Name,
                Duration = ConvertMsToDuration(p.DurationMs),
                ListenCount = p.TrackNumber.ToString(),
                ArtistName = p.Artists.First().Name,
                CoverPhoto = p.Album.Images.First().Url,
                Href = p.Href,
                Uri = p.Uri,
                Name = p.Name
            }).ToList();

            return trackList;
        }

        private static string ConvertMsToDuration(int milisecond)
        {
            long minutes = (milisecond / 1000) / 60;
            int seconds = (int)((milisecond / 1000) % 60);

            return string.Format("{0}:{1}", minutes, seconds);
        }


    }
}
