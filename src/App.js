import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/constants/Navbar';
import Footer from './components/constants/Footer';
import HomePage from './components/view/HomePage';
import MergePage from './components/view/MergePage';
import CompressPage from './components/view/CompressPage';
import RotatePage from './components/view/RotatePage';
import UnlockPage from './components/view/UnlockPage';
import ProtectPage from './components/view/ProtectPage';
import ReversePage from './components/view/ReversePage';
import DeletePage from './components/view/DeletePage';
import ExtractPage from './components/view/ExtractPage';
import JpgToPdfPage from './components/view/JpgToPdfPage';
import PdfToJpgPage from './components/view/PdfToJpgPage';
import PageNumberPage from './components/view/PageNumberPage';
import DownloadMerge from './components/pages/merg/DownloadMerge';
import DownloadCompressed from './components/pages/compress/DownloadCompressed';
import DownloadDelete from './components/pages/delete/DownloadDelete';
import DownloadRotate from './components/pages/rotate/DownloadRoate';
import DownloadUnlocked from './components/pages/unlock/DownloadUnlock';
import DownloadExtract from './components/pages/extract/DownloadExtract';
import DownloadReversed from './components/pages/reverse/DownloadReversed';
import DownloadPagenumber from './components/pages/page_number/DownloadPagenumber';
import DownloadJpgtoPdf from './components/pages/jpg-pdf/DownloadJpgtoPdf';
import DownloadProtect from './components/pages/protect/DownloadProtect';
import DownloadPdftoJpg from './components/pages/pdf-jpg/DownloadPdftoJpg';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/merge" element={<MergePage />} />
          <Route exact path="/compress" element={<CompressPage />} />
          <Route exact path="/rotate" element={<RotatePage />} />
          <Route exact path="/unlock" element={<UnlockPage />} />
          <Route exact path="/protect" element={<ProtectPage />} />
          <Route exact path="/reverse" element={<ReversePage />} />
          <Route exact path="/delete" element={<DeletePage />} />
          <Route exact path="/extract" element={<ExtractPage />} />
          <Route exact path="/jpg_to_pdf" element={<JpgToPdfPage />} />
          <Route exact path="/pdf_to_jpg" element={<PdfToJpgPage />} />
          <Route exact path="/page_number" element={<PageNumberPage />} />
          {/* Download Page */}
          <Route exact path="/merged_pdf" element={<DownloadMerge />} />
          <Route exact path="/compressed_pdf" element={<DownloadCompressed />} />
          <Route exact path="/updated_pdf" element={<DownloadDelete />} />
          <Route exact path="/rotated_pdf" element={<DownloadRotate />} />
          <Route exact path="/unlocked_pdf" element={<DownloadUnlocked />} />
          <Route exact path="/extracted_pdf" element={<DownloadExtract />} />
          <Route exact path="/reversed_pdf" element={<DownloadReversed />} />
          <Route exact path="/updated_pages_pdf" element={<DownloadPagenumber />} />
          <Route exact path="/updated_jpg_to_pdf" element={<DownloadJpgtoPdf />} />
          <Route exact path="/download_protected_pdf" element={<DownloadProtect />} />
          <Route exact path="/download_pdf_to_jpg" element={<DownloadPdftoJpg />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App