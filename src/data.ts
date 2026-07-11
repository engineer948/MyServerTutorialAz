import { DistributionInfo, Step } from './types';

export const INTRO_CONTENT = {
  welcomeTitle: "Şəxsi Rəqəmsal Azadlığınız Buradan Başlayır",
  welcomeSubtitle: "Öz serverinizi qurun, məlumatlarınızı qoruyun və korporativ buludlardan asılılığa son qoyun.",
  whatIsSelfHostingTitle: "Self-Hosting Nədir?",
  whatIsSelfHostingText: "Self-hosting (özünə-evsahibliyi) – böyük korporasiyaların və üçüncü tərəf şirkətlərinin bulud xidmətlərindən istifadə etmək əvəzinə, şəxsi proqram təminatı və tətbiqlərinizi özünüzə məxsus fiziki və ya virtual serverdə işlətmək təcrübəsidir. İnternetdə hər addımımızın davamlı izlənildiyi və məlumatlarımızın kütləvi şəkildə toplandığı müasir dövrdə, bu üsulla siz şəxsi bulud yaddaşınızı, media serverinizi, parollar menecerinizi və digər onlarla xidməti tamamilə öz nəzarətiniz altında saxlaya bilərsiniz.",
  
  benefits: [
    {
      title: "Məlumat Gizliliyi (Data Privacy)",
      description: "Şəxsi şəkilləriniz, sənədləriniz və parollarınız heç vaxt yad serverlərə getmir. Hər şey sizin evinizdə və ya şəxsi virtual serverinizdə şifrələnmiş şəkildə saxlanılır."
    },
    {
      title: "Tam Nəzarət və Sərbəstlik",
      description: "Xidmət provayderlərinin qaydaları, qiymət artımları və ya qəfil xidmət dayandırmaları sizə təsir etmir. İstədiyiniz tətbiqi istədiyiniz vaxt quraşdırıb silə bilərsiniz."
    },
    {
      title: "Öyrənmək və İnkişaf",
      description: "Server idarəetməsi, şəbəkə sazlanması (networking) və Linux əməliyyat sistemləri ilə yaxından tanış olaraq İT biliklərinizi praktiki olaraq inkişaf etdirirsiniz."
    },
    {
      title: "Uzunmüddətli Qənaət",
      description: "Hər ay bulud xidmətlərinə abunə haqqı ödəmək əvəzinə, evdə istifadə olunmayan köhnə bir noutbuku və ya kompüteri güclü bir serverə çevirə bilərsiniz."
    }
  ]
};

export const DISTRIBUTIONS: DistributionInfo[] = [
  {
    id: 'ubuntu',
    name: 'Ubuntu Server',
    tagline: 'Ən asan yol: Başlanğıc üçün mükəmməl seçim',
    badge: 'Tövsiyə Olunur',
    difficulty: 'Beginner',
    difficultyLabel: 'Asan / Başlanğıc',
    packageManager: 'APT (apt-get)',
    initSystem: 'systemd',
    pros: [
      "Çox böyük icma dəstəyi (istənilən problemin həlli internetdə var)",
      "Proqram təminatı və tətbiq yaradıcıları tərəfindən rəsmi olaraq birinci dərəcəli dəstək",
      "Geniş sənədləşmə və sadə quraşdırıcı interfeys"
    ],
    cons: [
      "Arxa planda Canonical-ın 'Snap' paketlərinə bəzən həddindən artıq üstünlük verməsi",
      "Müasir paket yenilənmələrinin bəzi digər paylamalara nisbətən daha gec gəlməsi"
    ],
    recommendationReason: "Əgər Linux server dünyasına ilk dəfə addım atırsınızsa, Ubuntu Server sizin üçün ən stabil və stressiz seçimdir. Demək olar ki, hər bir self-hosting tətbiqi ilk olaraq Ubuntu üçün sınaqdan keçirilir."
  },
  {
    id: 'fedora',
    name: 'Fedora Server',
    tagline: 'Yenilikçi və Müasir: Təcrübəli istifadəçilər üçün',
    badge: 'Qabaqcıl',
    difficulty: 'Intermediate',
    difficultyLabel: 'Orta / Qabaqcıl',
    packageManager: 'DNF',
    initSystem: 'systemd',
    pros: [
      "Ən son Linux nüvəsi (Kernel) və ən yeni proqram təminatı paketləri",
      "Red Hat (RHEL) ekosisteminin stabilliyi və güclü təhlükəsizlik alətləri (SELinux daxildir)",
      "Konteyner texnologiyaları (Podman, Docker) üçün mükəmməl uyğunluq"
    ],
    cons: [
      "Yenilənmələrin çox tez-tez olması (hər 6 aydan bir yeni ana versiya çıxır)",
      "SELinux qaydalarının bəzən yeni başlayanlar üçün mürəkkəb quraşdırma xətalarına səbəb olması"
    ],
    recommendationReason: "Əgər ən yeni texnologiyaları sınamaq istəyirsinizsə və ya Enterprise Red Hat ekosistemində təcrübə qazanmaq niyyətindəsinizsə, Fedora Server müasir və sürətli infrastrukturu ilə sizin üçün ən yaxşı seçim olacaqdır."
  }
];

export const UBUNTU_STEPS: Step[] = [
  {
    id: 1,
    title: "ISO Faylının Yüklənməsi",
    description: "Ubuntu Server-in ən son LTS (Uzunmüddətli Dəstək) versiyasının rəsmi ISO şəkli yüklənilir.",
    detail: "Ubuntu rəsmi saytına (ubuntu.com/download/server) daxil olun və 'Ubuntu Server LTS' variantını yükləyin. LTS versiyası 5 il ərzində pulsuz təhlükəsizlik yeniləmələrini təmin edir."
  },
  {
    id: 2,
    title: "Yükləmə Fləş Kartının (USB) Hazırlanması",
    description: "Yüklənilmiş ISO faylını Rufus proqramı vasitəsilə boş bir USB diskə yazın.",
    detail: "Rufus proqramını açın, yüklədiyiniz ISO faylını seçin, USB diskinizi hədəf olaraq təyin edin və yazdırın. Yazılma prosesinin tam bitməsini gözləyin. Rufus çox sürətli və tamamilə etibarlı bir yazma alətidir."
  },
  {
    id: 3,
    title: "USB-dən Birdəfəlik Başlanğıc (Çox Vacib BIOS Addımı)",
    description: "Server olacaq kompüterə USB-ni taxın və birdəfəlik Yükləmə Seçimləri Menyusundan (Boot Options Menu) USB diskini seçin.",
    detail: "DİQQƏT: BIOS parametrlərindən daimi yükləmə üstünlüyü sırasını (boot priority order) dəyişməyə ehtiyac yoxdur. Kompüteri işə saldıqda dərhal klaviaturada cihaz istehsalçısına uyğun olan F12, F11, F8 və ya Esc düymələrini ardıcıl basaraq birdəfəlik 'Yükləmə Seçimləri Menyusu'nu (Boot Options Menu) açın və oradan quraşdırıcı USB diskinizi seçin. Bu, quraşdırma bitdikdən sonra kompüterin yenidən USB-yə deyil, birbaşa yeni qurulmuş server diskinə yüklənməsini asanlaşdırır."
  },
  {
    id: 4,
    title: "Dil və Şəbəkə Sazlamaları",
    description: "Quraşdırıcı menyuda sistemi idarə etmək üçün dil və klaviatura düzümünü seçin.",
    detail: "Dil olaraq İngilis dilini seçmək tövsiyə olunur (xətaları araşdırarkən daha asan olur). Şəbəkə bölməsində serverinizin yerli şəbəkə daxilində sabit (static) IP ünvanı almasını təmin edin və ya DHCP vasitəsilə təyin edilmiş IP-ni qeyd dəftərinizə yazın."
  },
  {
    id: 5,
    title: "Disk Bölmələrinin Təyini (Partitioning)",
    description: "Əməliyyat sisteminin quraşdırılacağı əsas diski seçin.",
    detail: "Başlanğıc üçün 'Use an entire disk' (Bütün diskdən istifadə et) seçimini aktiv saxlayın. Alt hissədə 'Set up this disk as an LVM group' xanasını işarələyin. Bu gələcəkdə diski asanlıqla genişləndirməyə imkan verəcək."
  },
  {
    id: 6,
    title: "İstifadəçi Hesabının Yaradılması",
    description: "Serverə daxil olmaq üçün idarəçi (sudoer) istifadəçi adını və şifrəsini təyin edin.",
    detail: "Sistemə daxil olmaq üçün yadda qalan, lakin təhlükəsiz istifadəçi adı və güclü şifrə yazın. Serverin şəbəkə adını (Hostname) təyin edin (məsələn: 'ev-serverim')."
  },
  {
    id: 7,
    title: "SSH Serverin Aktivləşdirilməsi",
    description: "Serveri uzaqdan idarə etmək üçün OpenSSH server tətbiqini quraşdırın.",
    detail: "'Install OpenSSH server' seçiminin yanındakı xananı mütləq işarələyin (Boşluq düyməsi ilə). Bu sizə serverin yanına getmədən öz əsas kompüterinizdən terminal vasitəsilə serverə qoşulma imkanı yaradacaq."
  },
  {
    id: 8,
    title: "Quraşdırmanın Tamamlanması və Yenidən Başlatma",
    description: "Faylların kopyalanmasını gözləyin və sistemi yenidən başladın.",
    detail: "Sistem yüklənməni bitirdikdə 'Reboot Now' düyməsi çıxacaq. Bu zaman quraşdırıcı USB-ni kompüterdən çıxarın və Enter düyməsini basın. Serveriniz tam hazır vəziyyətdə açılacaq."
  }
];

export const FEDORA_STEPS: Step[] = [
  {
    id: 1,
    title: "Fedora Server ISO-nun Yüklənməsi",
    description: "Fedora-nın rəsmi veb saytından Server buraxılışının Netinstall və ya Standard ISO şəkli yüklənilir.",
    detail: "Fedora-nın rəsmi saytına (fedoraproject.org/server/download) daxil olaraq 'Fedora Server x86_64 DVD/Netinstall ISO' faylını kompyuterinizə endirin."
  },
  {
    id: 2,
    title: "Fləş Kartın (USB) Hazırlanması",
    description: "ISO faylını Rufus (DD rejimində) və ya Fedora Media Writer proqramı ilə USB diskə köçürün.",
    detail: "Rəsmi 'Fedora Media Writer' proqramından istifadə etmək tövsiyə olunur. Alternativ olaraq, Rufus proqramını istifadə edərkən ISO-nu 'DD image' rejimində yazmağa diqqət edin."
  },
  {
    id: 3,
    title: "Birdəfəlik Yükləmə Menyusundan Başlanğıc (Çox Vacib BIOS Addımı)",
    description: "BIOS tənzimləmələrini dəyişmədən birbaşa Boot Options Menu vasitəsilə USB diskdən sistemi başladın.",
    detail: "DİQQƏT: BIOS parametrlərindən daimi yükləmə üstünlüyü sırasını (boot priority order) dəyişməyə ehtiyac yoxdur. Kompüteri işə saldıqda dərhal klaviaturada cihaz istehsalçısına uyğun olan F12, F11, F8 və ya Esc düymələrini ardıcıl basaraq birdəfəlik 'Yükləmə Seçimləri Menyusu'nu (Boot Options Menu) açın və oradan quraşdırıcı USB diskinizi seçin. Bu, quraşdırma bitdikdən sonra kompüterin yenidən USB-yə deyil, birbaşa yeni qurulmuş server diskinə yüklənməsini asanlaşdırır."
  },
  {
    id: 4,
    title: "Anaconda Quraşdırıcı İnterfeysi",
    description: "Fedora-nın qrafik quraşdırıcısı olan Anaconda ekranında dil və klaviatura seçimini edin.",
    detail: "Dil siyahısından özünüzə uyğun dili təyin edin. 'Installation Summary' (Quraşdırma Xülasəsi) ekranında nida işarəsi olan bölmələri nizamlamaq lazımdır."
  },
  {
    id: 5,
    title: "Quraşdırma Diskinin və Bölmələrinin Seçimi",
    description: "Sistemin yazılacağı əsas sabit diski təyin edin.",
    detail: "'Installation Destination' bölməsinə daxil olun, hədəf diskinizi seçin və 'Automatic' konfiqurasiyasını seçib sol yuxarıdakı 'Done' düyməsini klikləyin. Əgər diskdə köhnə fayllar varsa, onları silmək üçün ekran açılacaq."
  },
  {
    id: 6,
    title: "Şəbəkə Sazlamaları və Hostname",
    description: "Serverin lokal IP ünvanını və şəbəkədəki adını təyin edin.",
    detail: "'Network & Host Name' bölməsinə keçin. Şəbəkə bağlantısını aktivləşdirin (ON). Sol alt küncdə serveriniz üçün bir ad (məsələn: 'fedora-server') yazın və 'Apply' düyməsinə basın."
  },
  {
    id: 7,
    title: "İstifadəçi Yaradılması və Root Girişi",
    description: "İdarəçi istifadəçi hesabı qurun və uzaqdan giriş icazələrini verin.",
    detail: "'User Creation' bölməsində istifadəçi adınızı və şifrənizi yazın. 'Make this user administrator' (Bu istifadəçini administrator et) xanasını mütləq işarələyin. Təhlükəsizlik üçün ayrıca 'Root' hesabını deaktiv saxlamağınız tövsiyə olunur."
  },
  {
    id: 8,
    title: "Sistemin Quraşdırılması və İlk Başlanğıc",
    description: "Faylları diskə köçürün və quraşdırma bitdikdən sonra serverinizi başladın.",
    detail: "Bütün ayarlar hazır olduqdan sonra 'Begin Installation' düyməsinə klikləyin. Quraşdırma tamamlandıqda USB diski çıxarın, 'Reboot System' düyməsinə klikləyin. Fedora Serveriniz idarəetməyə tam hazırdır!"
  }
];

export const CASAOS_CONTENT = {
  title: "CasaOS ilə Serverinizi Sadələşdirin",
  subtitle: "Mürəkkəb terminal əmrlərini unudun. Docker tətbiqlərini bir kliklə idarə edin!",
  description: "CasaOS, ev serverləri və fərdi self-hosting istifadəçiləri üçün hazırlanmış, açıq qaynaqlı və çox yüngül bir şəxsi bulud idarəetmə sistemidir. O, Docker üzərində işləyərək sizə veb-brauzer vasitəsilə idarə oluna bilən olduqca gözəl, müasir və sadə bir masaüstü interfeysi təqdim edir. CasaOS ilə Nextcloud, Plex, Pi-hole, Jellyfin və AdGuard kimi məşhur tətbiqləri heç bir terminal kodu yazmadan tək kliklə quraşdıra bilərsiniz.",
  
  features: [
    {
      title: "Gözəl Veb İnterfeysi",
      description: "Hər hansı bir brauzerdən daxil olaraq serverinizin CPU, RAM və yaddaş vəziyyətinə real vaxtda nəzarət edin."
    },
    {
      title: "App Store (Tətbiqlər Mağazası)",
      description: "Daxili mağazadan onlarla faydalı Docker tətbiqini bir toxunuşla quraşdırın, işə salın və dayandırın."
    },
    {
      title: "Zəngin Fayl Meneceri",
      description: "Serverinizdəki faylları sürüşdürüb-buraxmaqla (drag-and-drop) idarə edin, şəkillərə baxın və videoları birbaşa izləyin."
    },
    {
      title: "Konteyner İnteqrasiyası",
      description: "Hər hansı bir xüsusi Docker tətbiqini öz konfiqurasiyanızla asanlıqla əlavə edin və idarə edin."
    }
  ],

  installScript: "curl -fsSL https://get.casaos.io | sudo bash",

  fedoraNotesTitle: "Fedora Server üçün Önəmli Qeydlər və Asılılıqlar",
  fedoraNotes: [
    "Fedora-da curl tətbiqinin quraşdırıldığından əmin olun. Əgər yoxdursa, bu əmrlə quraşdırın: `sudo dnf install curl -y`",
    "SELinux təhlükəsizlik siyasəti bəzən Docker-in fayl sisteminə daxil olmasına mane ola bilər. Problem yarandıqda Docker üçün SELinux icazələrini sazlayın və ya müvəqqəti olaraq permissiv rejimə keçirin.",
    "Fedora-nın daxili təhlükəsizlik divarı (firewalld) CasaOS portlarını bloklaya bilər. Brauzerdən daxil ola bilməsəniz, xidmət portuna (Port 80) icazə vermək üçün bu əmrləri icra edin: \n`sudo firewall-cmd --zone=public --add-service=http --permanent && sudo firewall-cmd --reload`"
  ]
};
