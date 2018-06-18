package zhku.jsj141.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.alibaba.fastjson.JSON;

import zhku.jsj141.bean.test;
@Path(value = "user")
public class UserRest {
	@GET@Produces(MediaType.APPLICATION_JSON)
	@Path(value = "test")//ID必须有
	public String test(@QueryParam(value="ID") int id){
		System.out.println(id);
		test t = new test(System.currentTimeMillis(),"中文","123456","18826494487","123123123@qq.com");
		return JSON.toJSONString(t);
	}
	
	public String Index(){
		return "";
	}
}
