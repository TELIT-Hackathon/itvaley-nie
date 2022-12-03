Ideme robit appku v Reacte s MUI; Server Node MongoDB a Express
TODO: Registrácia a prihlásenie b

- Čo ideme robiť?
	- Skupiny a profil užívateľa
	  Máme 3 skupiny:
		- **Experti**
		- **Študenti**
		- **Pedagógovia**
		  
		  Každá skupina potrebujeme si zaznačiť technológie, ktoré chce/vie (čo viem, o čo sa zaujímam)
		  **Učiteľ**/**Študent** = Kde študuje; **Experti** = Kde robí
	- Štatistika potencionálnych užívateľov
		- 70 Stredných škôl
			- 70 * 2 učiteľov
			- 70 * 30 študentov
			- =~2200 užívateľov zo SŠ
		- 2 Vysoké školy
			- 2000 študentov
			- ~100 učiteľov
			- =~2100 užívateľov VŠ
		- **Experti**
			- =~100 Expertov
	- Technológie: Kategórie a Tags
	  Trebalo by to spraviť tak, aby: Keď si užívateľ dá špecifický Tag, tak ho autmaticky zaradí do danej kategórie technológie
		- Spravíme to to tak, že **študenti** a **učitelia** si budú voliť špecifické kategórie, v ktorých potrebujú pomoc/ťa zaujíma; + Advanced profil: Zvoliť si špecifické Tags
		- **Expert** si zvolí špecifické Tags (a to ho zaradí to špecifickej kategórie)
	- DashBoard:
		- Matching: Na zisťovanie kontaktov
		  Pri Expertoch, keď hľadá potencionálnych študentov do firmy/na projekt
		  Pri študentoch, keď hľadá potencionálnu prácu/projekt/konzultáciu
		  Učiteľ/Expert vypíše projekt, ktorý si spraví projekt, hľadá/užívatelia sa prihlásia na projekt
		  =TL;DR Každá skupina si vie každú skupinu nájsť
		  = obaja si hľadajú Match s *osobou*
			- Tinder-style swapovanie 
			- Spider Chart ako vizualizáciu Matchu, Match kategórií *hľadajúcej* *osoby*  s kategóriami *hľadanej* *osoby* (alebo naopak)
		- Žiadosti: Osoba žiada o pomoc niekoho...
			- Projekt:
			- Hapcrkrcvqkva
- Čo treba zrobiť:
	- Databazu
	- Backend:
		- API
		- Kategórie & Tagy
		- Registrácia = Vytvorenie profilu
		- Prihlásenie
		- Get Profilu
		- Odhlásenie
	- Frondend:
		- API
		- Úvodná obrazovka
		- Registrácie
		- Prihlásenie
		- Get Profilu
		- Odhlásenie