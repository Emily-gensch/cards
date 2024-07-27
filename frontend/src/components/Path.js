const app_name = 'cardsdirectory-7dd5c98a319c'
exports.buildPath =
function buildPath(route)
{
	if (process.env.NODE_ENV === 'production')
	{
    	return 'https://' + app_name +  '.herokuapp.com/' + route;
	}
	else
	{    	
    	return 'http://localhost:5000/' + route;
	}
}
