package marhaba.modele;

import java.util.Arrays;

public class Photo {

	public String description,url,user;
	public long likes,width;
	
	public Photo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Photo(String description, String url, String user, long likes,long width) {
		super();
		this.description = description;
		this.url = url;
		this.user = user;
		this.likes = likes;
		this.width=width;
	}

	@Override
	public String toString() {
		return "Photo [description=" + description + ", url=" + url + ", user=" + user + ", likes=" + likes + "]";
	}
	
	
	
	
}
