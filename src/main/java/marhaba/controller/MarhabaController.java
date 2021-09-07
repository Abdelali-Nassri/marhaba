package marhaba.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.IntNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.node.ValueNode;

import marhaba.modele.NomVille;
import marhaba.modele.Photo;
import marhaba.modele.PhotoData;
import marhaba.modele.Ville;
import marhaba.services.MarhabaService;

@RestController
@CrossOrigin
public class MarhabaController {
	
	@Autowired
	public RestTemplate restTemplate;
	
	public MarhabaService marhabaService=new MarhabaService();

	@GetMapping("/api/villes/photos")
	public PhotoData getPhotoAll(@RequestParam(defaultValue = "10") int nombre){
		
		PhotoData photoData =new PhotoData();
		
		if(nombre <=30) {
			  photoData= marhabaService.getPhotos("morocco", "1", nombre);
		}
		else {photoData=marhabaService.getPhotos("morocco", "1", 30);
		photoData.results.addAll(marhabaService.getPhotos("morocco", "2", nombre-30).results) ;}
      
		
		
		
		return photoData;
	}
	
	
	
	@GetMapping("/api/villes/photos/{ville}")
	public PhotoData getPhotoAll2(@RequestParam(defaultValue = "10") int nombre,@PathVariable String ville) throws JsonParseException, JsonMappingException, IOException{
		System.out.println(nombre+":"+ville);
		PhotoData photoData =new PhotoData();
		List<Ville> villes = marhabaService.getInfos("all");
		int i =0;
		for (Ville v : villes) {
			if(v.city.toLowerCase().equals(ville.toLowerCase())) {i++;}
		}
		if(i==0) {return photoData;}
		
		if(nombre <=30) {
			  photoData= marhabaService.getPhotos(ville, "1", nombre);
		}
		else {photoData=marhabaService.getPhotos("morocco", "1", 30);
		photoData.results.addAll(marhabaService.getPhotos("morocco", "2", nombre-30).results) ;}
      
		
		
		
		return photoData;
	}
	@GetMapping("/api/villes/infos")
	public List<Ville> getInfoAll() throws JsonParseException, JsonMappingException, IOException{
		
		
		return marhabaService.getInfos("all");
	}
	
	@GetMapping("/api/villes/noms")
	public List<NomVille> getInfoName() throws JsonParseException, JsonMappingException, IOException{
		
		List<NomVille> noms =new ArrayList<NomVille>();
		for (Ville ville : marhabaService.getInfos("all")) {
			NomVille nom =new NomVille();
			nom.nom =ville.city;
			noms.add(nom);
		}
		return noms;
	}
	
	@GetMapping("/api/villes/infos/{ville}")
	public List<Ville> getInfoAll(@PathVariable String ville) throws JsonParseException, JsonMappingException, IOException{
		
		
		return marhabaService.getInfos(ville);
	}
	
}
