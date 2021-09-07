package marhaba.modele;

import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@JsonIgnoreProperties
public class PhotoData {

	public long total;
	public List<Photo> results;
	public PhotoData() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PhotoData(long total,  List<Photo> results) {
		super();
		this.total = total;
		this.results = results;
	}
	@Override
	public String toString() {
		return "PhotoData [total=" + total + ", results=" + results + "]";
	}
	
	
	
	
}
