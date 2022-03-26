var UserProfile = (function() {
  
    var getUserProfile = function() {        
        return localStorage.getItem("userProfile");    // Or pull this from cookie/localStorage
    };
  
    var setUserProfile = function(userProfile) {                
        localStorage.setItem("userProfile", userProfile);
    };
  
    return {
        getUserProfile: getUserProfile,
        setUserProfile: setUserProfile
    }
  
  })();
  
  export default UserProfile;