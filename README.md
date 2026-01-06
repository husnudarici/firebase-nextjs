# Firebase + Next.js Öğrenme Projesi

Bu proje, Next.js ve Google Firebase teknolojilerini öğrenmek için hazırlanmış bir örnek uygulamadır. Proje, Firebase Firestore veritabanından ürün verilerini çekerek listelemektedir.

## Teknolojiler

- **Next.js 16.1.1** - React tabanlı full-stack framework
- **React 19.2.3** - Kullanıcı arayüzü kütüphanesi
- **Firebase 12.7.0** - Client-side Firebase SDK (Firestore)
- **Firebase Admin 13.6.0** - Server-side Firebase SDK
- **TypeScript 5** - Tip güvenliği
- **Tailwind CSS 4** - Utility-first CSS framework

## Özellikler

### Firebase Entegrasyonu

Proje, Firebase'in hem client-side hem de server-side entegrasyonunu göstermektedir:

- **Client-Side Firebase** ([src/lib/firebase.ts](src/lib/firebase.ts))
  - Firestore veritabanı bağlantısı
  - Public API kullanımı

- **Server-Side Firebase Admin** ([src/lib/firebase-admin.ts](src/lib/firebase-admin.ts))
  - Server Components'ta güvenli veri erişimi
  - Service Account kimlik doğrulama
  - `server-only` paketi ile client bundle'a dahil edilmemesi

### Ürün Listeleme Özelliği

- Firestore'dan ürün verilerini çekme
- Fiyata göre azalan sıralama
- Server-side rendering ile SEO dostu yapı

## Kurulum

### 1. Projeyi İndirin

```bash
git clone <repo-url>
cd firebase-nextjs
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
# veya
yarn install
```

### 3. Firebase Projesi Oluşturun

1. [Firebase Console](https://console.firebase.google.com/) adresine gidin
2. Yeni bir proje oluşturun
3. Firestore Database'i etkinleştirin

### 4. Environment Değişkenlerini Ayarlayın

Proje kök dizininde `.env.local` dosyası oluşturun:

```env
# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin Configuration (Server-side)
NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL=your_service_account_email
NEXT_PUBLIC_FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

#### Firebase Yapılandırma Bilgilerini Alma

**Client Configuration:**
1. Firebase Console → Project Settings → General
2. "Your apps" bölümünden web app'inizi seçin
3. Config değerlerini kopyalayın

**Admin Configuration (Service Account):**
1. Firebase Console → Project Settings → Service Accounts
2. "Generate New Private Key" butonuna tıklayın
3. İndirilen JSON dosyasından gerekli bilgileri alın

### 5. Firestore'a Örnek Veri Ekleyin

Firebase Console → Firestore Database → "products" koleksiyonunu oluşturun ve örnek ürünler ekleyin:

```
Collection: products
Document ID: (auto)
Fields:
  - name: "Ürün 1"
  - price: 100
```

## Geliştirme

Development sunucusunu başlatın:

```bash
npm run dev
# veya
yarn dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje Yapısı

```
firebase-nextjs/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Ana layout
│   ├── page.tsx              # Ana sayfa
│   └── products/             # Ürünler sayfası
│       ├── page.tsx          # Ürünler route
│       ├── Products.tsx      # Server Component
│       ├── types.ts          # TypeScript tipleri
│       └── components/
│           └── products-list/
│               └── ProductsList.tsx  # Client Component
├── src/
│   └── lib/
│       ├── firebase.ts          # Client-side Firebase config
│       └── firebase-admin.ts    # Server-side Firebase Admin config
├── public/                  # Statik dosyalar
├── .env.local               # Environment değişkenleri (git'e eklenmez)
└── package.json
```

## Öğrenilen Konular

### Next.js 16 App Router
- Server Components ve Client Components ayrımı
- File-based routing sistemi
- Layout ve nested routes

### Firebase Firestore
- Koleksiyon ve döküman yapısı
- Veri okuma ve sorgulama
- `orderBy` ile sıralama
- Client SDK vs Admin SDK farkları

### TypeScript
- Interface ve type tanımlamaları
- Type safety ve type checking

### Environment Variables
- `.env.local` dosyası kullanımı
- Public vs private environment variables
- `NEXT_PUBLIC_` prefix'i

## Komutlar

```bash
npm run dev      # Development sunucusunu başlatır
npm run build    # Production build oluşturur
npm run start    # Production sunucusunu başlatır
npm run lint     # ESLint kontrolü yapar
```

## Güvenlik Notları

- `.env.local` dosyası asla git'e eklenmemelidir
- Private key'ler kesinlikle güvenli tutulmalıdır
- Production'da Firebase Security Rules ayarlanmalıdır
- Client-side'da sadece public bilgiler kullanılmalıdır

## Öğrenme Kaynakları

### Next.js
- [Next.js Dokümantasyonu](https://nextjs.org/docs)
- [Next.js Öğrenme Platformu](https://nextjs.org/learn)

### Firebase
- [Firebase Dokümantasyonu](https://firebase.google.com/docs)
- [Firestore Başlangıç Kılavuzu](https://firebase.google.com/docs/firestore/quickstart)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript with React](https://react-typescript-cheatsheet.netlify.app/)

## Deploy

Bu Next.js uygulamasını deploy etmenin en kolay yolu [Vercel Platformu](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) kullanmaktır.

Deploy etmeden önce:
1. Environment değişkenlerini Vercel'e ekleyin
2. Firebase Security Rules'ı yapılandırın
3. Production için Firebase projesini ayarlayın

Detaylı bilgi için [Next.js deployment dokümantasyonu](https://nextjs.org/docs/app/building-your-application/deploying)na bakabilirsiniz.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
