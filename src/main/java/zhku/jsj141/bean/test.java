package zhku.jsj141.bean;

public class test {
	private Long id;
	private String username;
	private String password;
	private String telnum;
	private String email;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getTelnum() {
		return telnum;
	}
	public void setTelnum(String telnum) {
		this.telnum = telnum;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public test(Long id, String username, String password, String telnum, String email) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.telnum = telnum;
		this.email = email;
	}
	
}
