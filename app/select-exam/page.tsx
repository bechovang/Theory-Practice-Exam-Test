"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookCopy, AlertTriangle, Loader2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// Cấu trúc dữ liệu mong đợi từ file deX.json
interface FetchedExamData {
  examId: string; // ID định danh, ví dụ: "CS101"
  title: string;
  description: string;
  tags: string[]; // Thêm tags để hiển thị, ví dụ: ["Computer Science", "Easy"]
}

// Cấu trúc dữ liệu để hiển thị thẻ đề thi
interface ExamCardDisplayData {
  id: number; // ID số, ví dụ: 1 cho de1.json
  examIdToDisplay: string;
  titleToDisplay: string;
  descriptionToDisplay: string;
  tagsToDisplay: string[];
  isLoading: boolean;
  isAvailable: boolean;
}

const MAX_EXAMS_TO_CHECK = 12; // Kiểm tra từ de1.json đến de12.json

export default function SelectExamPage() { // Đổi tên component cho phù hợp
  const router = useRouter()
  const [studentName, setStudentName] = useState("")
  const [examSets, setExamSets] = useState<ExamCardDisplayData[]>([]) // Đổi tên state

  useEffect(() => {
    const name = localStorage.getItem("studentName")
    if (!name) {
      router.push("/")
      return
    }
    setStudentName(name)

    const loadAllExams = async () => { // Đổi tên hàm
      const examIdsToTry = Array.from({ length: MAX_EXAMS_TO_CHECK }, (_, i) => i + 1);

      const initialPlaceholderSets: ExamCardDisplayData[] = examIdsToTry.map(id => ({
        id,
        examIdToDisplay: `de${id}`,
        titleToDisplay: `Đề thi ${id}`,
        descriptionToDisplay: "Đang tải thông tin...",
        tagsToDisplay: [],
        isLoading: true,
        isAvailable: false,
      }));
      setExamSets(initialPlaceholderSets);

      // --- SỬA LẠI ĐÚNG ĐƯỜNG DẪN FETCH FILE JSON ---
      const settledPromises = await Promise.allSettled(
        examIdsToTry.map(async (id) => {
          // Đã đổi lại đường dẫn thành /data/de${id}.json
          const response = await fetch(`/data/de${id}.json`); 
          if (!response.ok) {
            throw new Error(`File de${id}.json không tồn tại hoặc lỗi.`);
          }
          const data: FetchedExamData = await response.json();
          return { id, ...data };
        })
      );

      const updatedSets = initialPlaceholderSets.map((placeholderSet, index) => {
        const result = settledPromises[index];
        if (result.status === "fulfilled") {
          const loadedData = result.value;
          return {
            id: placeholderSet.id,
            examIdToDisplay: loadedData.examId,
            titleToDisplay: loadedData.title,
            descriptionToDisplay: loadedData.description,
            tagsToDisplay: loadedData.tags || [],
            isLoading: false,
            isAvailable: true,
          };
        } else {
          return {
            ...placeholderSet,
            descriptionToDisplay: "Đề thi này hiện không có sẵn.",
            isLoading: false,
            isAvailable: false,
          };
        }
      });
      setExamSets(updatedSets);
    };

    loadAllExams();
  }, [router]);

  const handleSelectExam = (exam: ExamCardDisplayData) => { // Đổi tên hàm
    if (!exam.isAvailable || exam.isLoading) return;
    localStorage.setItem("selectedExamId", exam.id.toString()) // Đổi key localStorage
    router.push(`/practice/${exam.id}`) // Giữ nguyên hoặc đổi thành /exam/${exam.id} tùy ý
  }
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-gray-950 p-4 sm:p-6">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <header className="mb-8 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white shadow-lg relative">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Image src="/logo-it.svg" alt="Logo" width={40} height={40} className="bg-white p-1 rounded-full" />
                        <h1 className="text-2xl font-bold">TechLearn Platform</h1>
                    </div>
                    <ThemeToggle />
                </div>
                <div className="mt-4 text-center">
                    <h2 className="text-xl font-semibold opacity-90">
                        Xin chào, {studentName}! 👋
                    </h2>
                    <p className="opacity-80 mt-1">
                        Hãy chọn một đề thi để bắt đầu hành trình chinh phục kiến thức nhé!
                    </p>
                </div>
            </header>
        </motion.div>

        <motion.div 
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          {examSets.map((exam) => (
            <motion.div
              key={exam.id}
              variants={itemVariants}
              onClick={() => handleSelectExam(exam)}
            >
              <Card className={`transition-all duration-300 border-2 flex flex-col h-full group ${
                  exam.isAvailable && !exam.isLoading
                    ? 'bg-white dark:bg-gray-900/60 hover:shadow-2xl hover:scale-105 hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer'
                    : 'bg-gray-100 dark:bg-gray-800/50 opacity-80 cursor-not-allowed'
                }`}
              >
                <CardContent className="flex flex-col h-full p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-opacity-10 ${exam.isAvailable ? 'bg-blue-500 text-blue-500' : 'bg-orange-400 text-orange-400'}`}>
                      {exam.isAvailable ? <BookCopy className="h-7 w-7" /> : <AlertTriangle className="h-7 w-7" />}
                    </div>
                  </div>
                  
                  {exam.isLoading ? (
                    <div className="flex-grow flex flex-col items-center justify-center py-8">
                      <Loader2 className="h-10 w-10 animate-spin text-blue-500" />
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">{exam.titleToDisplay}</p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exam.titleToDisplay}
                      </h3>
                      <p className={`text-gray-500 dark:text-gray-400 mb-4 flex-grow text-sm ${!exam.isAvailable ? 'italic' : ''}`}>
                        {exam.descriptionToDisplay}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exam.tagsToDisplay.map(tag => (
                          <span key={tag} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                  
                  <Button 
                    className={`mt-auto w-full font-semibold ${
                    exam.isAvailable && !exam.isLoading
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                    }`}
                    disabled={!exam.isAvailable || exam.isLoading}
                  >
                    {exam.isLoading ? 'Đang tải...' : (exam.isAvailable ? 'Bắt đầu làm bài' : 'Không có sẵn')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            💡 "Học, học nữa, học mãi." - V.I. Lenin
          </p>
        </motion.div>
      </div>
    </div>
  )
}