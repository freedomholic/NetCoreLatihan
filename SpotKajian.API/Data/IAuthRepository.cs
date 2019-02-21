using System.Threading.Tasks;
using SpotKajian.API.Models;

namespace SpotKajian.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);
    }
}