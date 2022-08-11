import { Country } from '../core/interfaces/country.interface';
import { Info } from './interfaces/info.interface';

export const COUNTRIES: Country[] = [
  {
    name: "Cote d'ivoire",
    flag: 'assets/images/flags/ci.png',
    status: 'Disponible',
  },
  {
    name: 'Senegal',
    flag: 'assets/images/flags/senegal.png',
    status: 'Bientot',
  },
  {
    name: 'Mali',
    flag: 'assets/images/flags/mali.png',
    status: 'Bientot',
  },
  {
    name: 'Burkina Faso',
    flag: 'assets/images/flags/burkina.png',
    status: 'Disponible',
  },
];

export const INFO: Info[] = [
  {
    position: '01',
    title: "Notre mission et nos clients sont notre raison d'être",
    content: `Nous sommes des fervents défenseurs de notre mission pour améliorer le 
    quotidien de toutes les personnes touchant à nos produits, que ce soit les personnes frustrées 
    par les services de leur banque ou celles qui n'en ont jamais eu accès.`,
  },
  {
    position: '02',
    title: 'Nous marchons ensemble pour aller plus loin',
    content: `C'est en équipe que nous challengeons le statu quo. Nous ne nous laissons pas freiner par les obstacles, 
    nous nous aidons mutuellement et partageons notre savoir pour les franchir et porter notre mission aussi loin que possible.`,
  },
  {
    position: '03',
    title: 'Nous sommes directs et transparents',
    content: `Nous voulons offrir un service juste, simple et transparent pour redonner aux personnes le contrôle et la chance de réinventer leur propre vie financière. 
    Nous sommes directs et transparents dans notre communication car nous n'avons rien à cacher.`,
  },
  {
    position: '04',
    title: 'Nous sommes agiles et réactifs',
    content: `Nous sommes en perpétuelle innovation pour améliorer le quotidien de nos utilisateurs. Nous luttons contre la bureaucratie, les lourdeurs formalités administratives, 
    les succursales, les centres de services clients inefficaces.`,
  },
];
