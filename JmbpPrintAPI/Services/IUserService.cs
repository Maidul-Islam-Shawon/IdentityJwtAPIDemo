using IdentityJwtAPIDemo.Shared;
using IdentityJwtAPIDemo.Shared.ViewModels;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JmbpPrintAPI.Services
{
    public interface IUserService
    {
        Task<UserManagerResponse> RegisterUserAsync(RegisterViewModel model);

    }

    public class UserService : IUserService
    {
        private readonly UserManager<IdentityUser> _userManager;

        public UserService(UserManager<IdentityUser> userManager )
        {
            this._userManager = userManager;
        }

        public async Task<UserManagerResponse> RegisterUserAsync(RegisterViewModel model)
        {
            if (model == null)
                throw new NullReferenceException("Register Model is null");

            if(model.Password != model.ConfirmPassword)
                return new UserManagerResponse
                {
                    Message = "Confirm password does not match the password",
                    IsSuccess = false,
                };

            //......or you can write the above line like below.......//
            //if (model.Password != model.ConfirmPassword)
            //{
            //    var responseMessage = new UserManagerResponse
            //    {
            //        Message = "Confirm password does not match the password",
            //        IsSuccess = false,
            //    };

            //    return responseMessage;
            //}

            var identityUser = new IdentityUser
            {
                Email = model.Email,
                UserName = model.Email
            };

            var result = await _userManager.CreateAsync(identityUser, model.Password);

            if (result.Succeeded)
            {
                return new UserManagerResponse
                {
                    Message = "User created successfully",
                    IsSuccess=true
                };
            }
            return new UserManagerResponse
            {
                Message = "User did not create",
                IsSuccess = false,
                Errors = result.Errors.Select(m => m.Description)
            };
        }
    }
}
