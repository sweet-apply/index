'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const res = await uniCloud.httpclient.request('http://39.106.124.138:18080/app/city/cityList', {
		method: 'GET',
		dataType: 'json'
	});
	return res.data;
};
