﻿using System;
using System.Collections.Generic;
using System.Text;

namespace IdentityJwtAPIDemo.Shared
{
    public class UserManagerResponse
    {
        public string Message { get; set; }
        public bool IsSuccess { get; set; }
        public IEnumerable<string> Errors { get; set; }
    }
}