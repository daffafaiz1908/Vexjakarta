# Product Requirements Document (PRD)
## VEXJKT — Event Organizer & Nightlife Experience Platform

**Versi:** 1.2 (Final - Instagram Only & Tech Update)  
**Tanggal:** 26 Agustus 2026  
**Status:** Final  
**Kategori:** Website / Landing Page  
**Tech Stack Utama:** Next.js (React Framework)

---

## 1. Ringkasan Eksekutif

**VEXJKT** adalah brand *event organizer* berbasis di Jakarta yang berfokus pada penyelenggaraan acara hiburan malam (*nightlife events*), seperti pesta tematik, konser mini, dan *club events*. Website ini dibangun menggunakan **Next.js** untuk memastikan performa tinggi (SSR/SSG), SEO yang optimal, dan transisi halaman yang mulus. Platform ini berfungsi sebagai **digital storefront** utama untuk memperkenalkan brand, menampilkan acara mendatang, dan memfasilitasi konversi pengguna menjadi pembeli tiket atau tamu event.

### Tagline
> *"Experience the Unforgettable — We organize events, you make memories."*

### Target Audiens
| Segmen | Deskripsi |
|---|---|
| **Primary** | Anak muda urban (18–30 tahun) di Jakarta yang aktif dalam kehidupan malam |
| **Secondary** | Brand & korporasi yang mencari vendor untuk private/brand events |
| **Tertiary** | Venue, artis, dan mitra kolaborasi event |

---

## 2. Tujuan Produk

| # | Tujuan | Metrik Keberhasilan |
|---|---|---|
| 1 | Meningkatkan brand awareness VEXJKT di Jakarta | Peningkatan followers Instagram |
| 2 | Memfasilitasi penjualan tiket event | Jumlah klik "Get Tickets" per event |
| 3 | Mendorong RSVP table & reservasi | Jumlah kontak WhatsApp masuk dari website |
| 4 | Menarik mitra kolaborasi (brand/venue) | Jumlah inquiry collaboration per bulan |
| 5 | Membangun kepercayaan audiens baru | Waktu rata-rata di halaman, bounce rate |

---

## 3. Fitur & Fungsionalitas yang Ada

### 3.1 Navigasi & Header

| Elemen | Deskripsi | Status |
|---|---|---|
| Logo (VEXJKT) | Link ke `#home` | ✅ Ada |
| Menu: Home | Anchor link ke section hero | ✅ Ada |
| Menu: About | Anchor link ke section about | ✅ Ada |
| Dropdown: Social Media | Menampilkan link Instagram | ✅ Ada |
| Tombol: Contact Us | Link WhatsApp langsung | ✅ Ada |
| Sticky Header | Header mengikuti scroll pengguna | ✅ Ada |

**Gap / Peluang Peningkatan:**
- ❌ Tidak ada menu "Events" di navbar (hanya diakses lewat hero)
- ❌ Tidak ada menu "Gallery" di navbar
- ❌ Tidak ada fitur login / area member

---

### 3.2 Hero Section

| Elemen | Deskripsi |
|---|---|
| Headline utama | "Experience the Unforgettable" |
| Subheadline | "We organize events, you make memories." |
| CTA Primer | **"Explore Events"** — scroll ke section events |
| CTA Sekunder | **"Book Table"** — buka WhatsApp dengan pesan pre-filled |
| Background | Desain visual nightlife / dark aesthetic (Dioptimalkan menggunakan `next/image`) |

---

### 3.3 Upcoming Events

Menampilkan event mendatang dalam format **card event**.

**Data yang Ditampilkan per Event:**
- Nama Event (contoh: *Neon Jungle*)
- Deskripsi singkat event
- Tanggal & waktu (contoh: Friday, Sept 5, 2026 | 9 PM - Late)
- Lokasi venue (contoh: Bengkel Space SCBD, South Jakarta)

**Action per Event:**
| Tombol | Aksi |
|---|---|
| **Tickets** | Membuka modal dengan opsi tiket (Pre-Register / Buy Tickets) |
| **RSVP Table** | Membuka WhatsApp dengan pesan pre-filled untuk reservasi meja |
| **Get Tickets** | Link eksternal ke platform ticketing |

**Fitur Modal Tiket:**
- Menampilkan event detail (nama, tanggal, venue, deskripsi)
- Link ke Pre-Register (halaman detail event internal)
- Tombol Buy Tickets (link ke external ticketing)

**Gap:**
- ❌ Hanya menampilkan 1 event sekaligus (tidak ada carousel/list multi-event)
- ❌ Tidak ada filter berdasarkan genre/tanggal
- ❌ Tidak ada notifikasi atau reminder untuk event mendatang

---

### 3.4 Halaman Event Detail (Pre-Register)

Halaman internal menggunakan *dynamic routing* Next.js (`/events/[event-slug]`) yang menampilkan:
- Poster event
- Nama & deskripsi lengkap event
- Informasi venue & tanggal
- Tombol Pre-Register / Get Tickets

**Gap:**
- ❌ Tidak ada form registrasi internal (masih redirect ke link eksternal atau WhatsApp)
- ❌ Tidak ada countdown timer ke hari H
- ❌ Tidak ada sharing button (share to social media)

---

### 3.5 About Section

Menampilkan cerita brand VEXJKT:
- Deskripsi singkat brand identity
- **Signature Event IPs** — koleksi event seri yang menjadi "brand IP" VEXJKT
  - Setiap IP ditampilkan dalam bentuk **poster yang dapat diklik**
  - Klik poster membuka **modal lightbox** untuk melihat poster ukuran penuh

**Gap:**
- ❌ Tidak ada halaman dedicated "About" yang lebih detail
- ❌ Tidak ada informasi tentang tim atau founders
- ❌ Tidak ada press / media coverage section

---

### 3.6 VEXJKT's Specialty (Value Proposition Slider)

Slider interaktif yang menampilkan 3 proposisi nilai utama:

| Slide | Judul | Konten |
|---|---|---|
| 1 | **Music Quality** | Genre: Top 40, EDM, R&B, Hip-Hop, Jersey, Afrobeats, Amapiano |
| 2 | **Unforgettable Experience** | Crowd energy tinggi, vibrant themes, memorable moments |
| 3 | **Your Safety Comes First** | Security checks, on-site staff |

**Fitur Slider:** Navigasi dengan indikator progress (dots/bars).

---

### 3.7 Event Gallery

Menampilkan koleksi foto dari event-event yang sudah berlangsung.

**Format:** Grid foto / masonry layout (Menggunakan fitur optimasi gambar dari Next.js)  
**Konten:** Real event photos dari nightlife events sebelumnya

**Gap:**
- ❌ Tidak ada filter berdasarkan event atau tahun
- ❌ Tidak ada lightbox/fullscreen viewer untuk foto
- ❌ Tidak ada link ke Instagram untuk more photos

---

### 3.8 Panduan Beli Tiket (How to Buy Tickets)

Section edukatif dengan 4 langkah visual:

| Step | Label | Deskripsi |
|---|---|---|
| 01 | Choose Event | Browse dan pilih event yang diinginkan |
| 02 | Click Tickets | Klik tombol tickets pada event card |
| 03 | Complete Payment | Ikuti instruksi pembayaran |
| 04 | Show Your Ticket | Tunjukkan tiket di pintu masuk |

---

### 3.9 FAQ (Frequently Asked Questions)

Komponen accordion interaktif dengan topik:
- Lokasi event (venue)
- Prosedur RSVP & tiket
- Dress code & protokol keamanan
- Peluang partnership / kolaborasi

**Gap:**
- ❌ Jumlah FAQ masih terbatas
- ❌ Tidak ada search/filter dalam FAQ
- ❌ Tidak ada halaman FAQ dedicated

---

### 3.10 Footer

**Informasi yang tersedia:**
- Quick Links: Home, Events, About, Contact
- Email: `contact@vexjkt.com` (Placeholder)
- WhatsApp: `+62 813-1713-6968`
- Social media: Instagram (@vexjkt)

**Quick Message Links (Pre-filled WhatsApp):**
| Tipe Pesan | Template Pesan |
|---|---|
| Event Collaboration | "Hi VEXJKT, I'm interested in Event Collaboration" |
| Private / Brand Event | "Hi VEXJKT, I'm interested in a Private / Brand Event" |
| General Inquiry | "Hi VEXJKT, I have a question" |

---

### 3.11 Floating Chat Widget

Widget tombol mengambang di pojok kanan bawah yang menampilkan popover dengan 3 opsi:
1. **RSVP Table** → WhatsApp (pesan pre-filled untuk RSVP)
2. **Buy Tickets** → WhatsApp (tanya tentang tiket)
3. **General Inquiry** → WhatsApp (pertanyaan umum)

---

## 4. Arsitektur Informasi (Struktur Routing Next.js)

```text
/ (Homepage)
├── /components
│   ├── HeroSection
│   ├── UpcomingEvents
│   ├── AboutSection
│   ├── ValueSlider
│   ├── Gallery
│   └── FAQ
│
/events (Rekomendasi Halaman Baru)
│
/events/[slug] (Dynamic Route untuk Detail Event)
```

---

## 5. Integrasi & Kanal Komunikasi

| Platform | Fungsi | Integrasi |
|---|---|---|
| **WhatsApp** | RSVP Table, Beli Tiket, Inquiry | Deep link `wa.me` dengan pesan pre-filled |
| **Instagram** | Brand awareness, portfolio visual | Link ke @vexjkt |
| **External Ticketing** | Penjualan tiket resmi | Link eksternal |
| **Email** | Komunikasi formal | `contact@vexjkt.com` |

---

## 6. Desain & Estetika

### Palet Warna
| Elemen | Warna |
|---|---|
| Background utama | Hitam gelap (`#0a0a0a` / near black) |
| Aksen utama | Emerald Green / Hijau zamrud (Dapat disesuaikan dengan identitas VEXJKT) |
| Teks | Putih (`#ffffff`) & abu-abu muda |
| CTA Primer | Solid emerald green |
| CTA Sekunder | Outlined / ghost button |

### Tipografi
- Modern sans-serif (clean, urban aesthetic)
- Hierarki heading yang jelas untuk keterbacaan

### Visual Style
- **Dark mode** sebagai default
- Nuansa nightlife / premium club
- Gambar event real yang vibrant
- Micro-animations pada slider & accordion (misal menggunakan Framer Motion yang kompatibel dengan React/Next.js)

---

## 7. Gap & Rekomendasi Fitur (Roadmap)

### 🔴 Prioritas Tinggi (Quick Wins)

| # | Fitur | Alasan |
|---|---|---|
| 1 | **Multi-event listing** | Saat ini hanya 1 event ditampilkan; perlu menampilkan multiple upcoming events sekaligus |
| 2 | **Dedicated Events Page** | Halaman tersendiri `/events` dengan list semua event + filter |
| 3 | **Event Countdown Timer** | Timer di halaman detail event untuk meningkatkan urgensi pembelian tiket |
| 4 | **Gallery Lightbox** | Viewer fullscreen untuk foto galeri |
| 5 | **Tombol "Events" di Navbar** | Aksesibilitas navigasi ke events lebih mudah |

### 🟡 Prioritas Menengah

| # | Fitur | Alasan |
|---|---|---|
| 6 | **Social Share Buttons** | Share event ke IG Story, WhatsApp |
| 7 | **Waitlist / Reminder** | Notifikasi email/WA jika event hampir sold out |
| 8 | **Past Events Archive** | Halaman arsip event lama untuk membangun kredibilitas |
| 9 | **Testimonials / Reviews** | Social proof dari event-goers sebelumnya |
| 10 | **Press / Media Section** | Mention di media / liputan untuk B2B credibility |

### 🟢 Prioritas Rendah (Future Enhancement)

| # | Fitur | Alasan |
|---|---|---|
| 11 | **User Account / Login** | Simpan history tiket & RSVP (Menggunakan NextAuth.js) |
| 12 | **Direct Ticket Sales Integration** | Integrasikan ticketing in-app (tanpa redirect) |
| 13 | **Newsletter Signup** | Database email untuk blast promosi event |
| 14 | **Event Notification Push** | Pemberitahuan push untuk event baru |
| 15 | **Multi-bahasa (ID/EN)** | Memperluas jangkauan ke audiens internasional menggunakan Next.js i18n routing |

---

## 8. Analisis Kompetitif (Potensi)

| Aspek | VEXJKT (Saat Ini) | Best Practice Industri |
|---|---|---|
| Event Discovery | Satu event di homepage | List dinamis + filter |
| Ticketing | Redirect eksternal | In-app checkout |
| RSVP | WhatsApp manual | Form digital + konfirmasi otomatis |
| Gallery | Grid statis | Integrasi Instagram feed |
| CRM | 0 (tidak ada) | Email capture + CRM |
| Analytics | Tidak terlihat | GA4 / Meta Pixel integration |

---

## 9. Asumsi & Batasan

> [!NOTE]
> **Asumsi Teknis**
> - Website dibangun menggunakan **Next.js** (App Router atau Pages Router) untuk memastikan SEO dan *load time* yang superior.
> - Aset visual dikelola menggunakan komponen `<Image/>` bawaan Next.js untuk optimasi ukuran otomatis.
> - Animasi dan interaktivitas akan dikelola menggunakan pustaka ekosistem React (seperti Framer Motion).
> - Tidak ada backend/database internal di fase awal; interaksi *backend-like* dialihkan melalui WhatsApp atau link eksternal.

> [!WARNING]
> **Batasan Saat Ini**
> - Tidak ada sistem ticketing internal — semua redirect ke pihak ketiga.
> - Tidak ada CRM atau database pengguna.
> - Konten event bersifat statis (sementara menggunakan file JSON lokal atau *hardcoded* di Next.js) sebelum berpindah ke Headless CMS (seperti Sanity atau Strapi) di masa depan.
> - Komunikasi B2C sepenuhnya bergantung pada WhatsApp personal.

---

## 10. Kriteria Sukses

| KPI | Target (3 bulan ke depan) |
|---|---|
| Unique Visitors / bulan | > 5.000 |
| Klik WhatsApp dari website | > 200 per event |
| Konversi RSVP dari website | > 50 table per event |
| Bounce Rate | < 60% |
| Average Session Duration | > 2 menit |
| Social Media Follower Growth | +1.000/bulan (Instagram) |
