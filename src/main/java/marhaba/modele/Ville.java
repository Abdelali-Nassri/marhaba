package marhaba.modele;

public class Ville {
	public String city,lat,lng,country,iso2,admin_name,capital,population,population_proper;

	public Ville() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ville(String city, String lat, String lng, String country, String iso2, String admin_name, String capital,
			String population, String population_proper) {
		super();
		this.city = city;
		this.lat = lat;
		this.lng = lng;
		this.country = country;
		this.iso2 = iso2;
		this.admin_name = admin_name;
		this.capital = capital;
		this.population = population;
		
	}

	@Override
	public String toString() {
		return "Ville [city=" + city + ", lat=" + lat + ", lng=" + lng + ", country=" + country + ", iso2=" + iso2
				+ ", admin_name=" + admin_name + ", capital=" + capital + ", population=" + population
				+ ", population_proper=" + population_proper + "]";
	}
	
	
}
