package marhaba.services;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import marhaba.modele.Photo;
import marhaba.modele.PhotoData;
import marhaba.modele.Ville;

@Service
public class MarhabaService {
	
	
	RestTemplate restTemplate=new RestTemplate();
	
	public PhotoData getPhotos(String cle,String page,int nombre) {
	    String url = "https://api.unsplash.com/search/photos?query="+cle+"&page="+page+"&client_id=MJfDGwb3KxZgg3Af-28ig4iCnlgE9tI-p8fou6TuJec&per_page="+nombre;
		JsonNode allData = restTemplate.getForObject(url, JsonNode.class);
		
		PhotoData photoData =new PhotoData();
		photoData.results=new ArrayList<Photo>();
		photoData.total=allData.findValue("total").asLong();
		JsonNode results = allData.get("results");
        for (JsonNode node : results) {
        	
        	Photo photo = new Photo();
        	photo.description=node.findValue("alt_description").asText();
        	photo.likes=node.findValue("likes").asLong();
        	photo.width=node.findValue("width").asLong();
        	
        	JsonNode urls = node.get("urls");
        	photo.url=urls.findValue("regular").asText();
        	
        	JsonNode user = node.get("user");
        	photo.user=user.findValue("username").asText();
        	
        	photoData.results.add(photo);
        }
		return photoData;
	}
	public List<Ville> getInfos(String cle) throws JsonParseException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		TypeReference<List<Ville>> typeReference = new TypeReference<List<Ville>>(){};
		InputStream inputStream = TypeReference.class.getResourceAsStream("/json/ma.json");
			List<Ville> villeCle =new ArrayList<>();
			List<Ville> villes = mapper.readValue(inputStream,typeReference);
			if(cle.equals("all")) {
			return villes;}
			else {
			for (Ville ville : villes) {
				if(ville.city.toLowerCase().equals(cle.toLowerCase())) {villeCle.add(ville);}
				
			}return villeCle;
				
			}
		
	}
}
