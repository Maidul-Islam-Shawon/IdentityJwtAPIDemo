using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JmbpPrintAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IdentityJwtAPIDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public UsersController(ApplicationDbContext db)
        {
            this._db = db;
        }

        [HttpGet("userslist")]
        public async Task<IActionResult> getAllUsersAsync()
        {
            var users = await _db.Users.ToListAsync();

            if (users == null)
            {
                return NotFound();
            }

            return Ok(users);
        }
    }
}