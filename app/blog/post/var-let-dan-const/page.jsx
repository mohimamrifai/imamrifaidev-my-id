import React from 'react'
import imgPost from './../../../images/post-img.png'
import Image from 'next/image'

export default function Page() {
    return (
        <article className='mt-24 w-10/12 mx-auto md:w-8/12 md:mt-28 lg:w-6/12'>
            <h1 className='text-3xl font-playFair'>Mencoba Memahami perbedaan <b>Var, let dan Const</b></h1>
            <div className='mt-3 flex justify-between items-center border-b-2 pb-3'>
                <span className='text-gray-700'>post by : <b>imam rifai</b></span>
                <span className='text-gray-700 text-sm'>01/01/2021</span>
            </div>
            <p className='mt-3 text-justify text-gray-700 text-base'>Hai, hari ini aku mau sharing sedikit hasil pembelajaran aku tentang pengugnaan kata kunci var, let, dan const untuk pembuatan variabel di javascript.</p>
            <Image src={imgPost} width={300} height={350} alt='post img' className='my-3 w-full' />
            <p className='mt-3 text-base text-justify text-gray-700'>Dalam bahasa pemrograman, penggunaan variabel sangat penting untuk menyimpan dan memanipulasi data. Dalam JavaScript, terdapat tiga kata kunci yang digunakan untuk mendeklarasikan variabel, yaitu var, let, dan const</p>
            <div>
                <h2 className='mt-5 mb-3 text-xl font-semibold'>1. kata kunci Var</h2>
                <p className='mt-3 text-base text-justify text-gray-700'>Sebelum diperkenalkannya let dan const pada versi terbaru JavaScript (ES6), var adalah satu-satunya kata kunci yang digunakan untuk mendeklarasikan variabel. Namun, penggunaan var memiliki beberapa kelemahan. Variabel yang dideklarasikan dengan var memiliki <b className='italic'>function scope</b>, yang berarti variabel hanya dapat diakses di dalam fungsi tempatnya dideklarasikan. Berikut adalah contoh penggunaan var:</p>
                <pre className='bg-gray-200 my-4 p-4 overflow-scroll text-gray-900 rounded-md'>{`function exampleFunction() {
var x = 10;
if (true) {
    var y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
    }
console.log(y); // Output: 20
        }
exampleFunction();
console.log(x); // Error: x is not defined
console.log(y); // Error: y is not defined`}</pre>
                <p className='mt-3 text-base text-justify text-gray-700'>Dalam contoh di atas, variabel x dideklarasikan menggunakan var di dalam fungsi exampleFunction(). Variabel y juga dideklarasikan di dalam blok if, tetapi masih dapat diakses di luar blok if. Variabel x tidak dapat diakses di luar fungsi exampleFunction().</p>
            </div>
            <div>
                <h2 className='mt-5 mb-3 text-xl font-semibold'>2. kata kunci Let</h2>
                <p className='mt-3 text-base text-justify text-gray-700'>Dengan diperkenalkannya let pada ES6, kita dapat menggunakan kata kunci ini untuk mendeklarasikan variabel dengan <b className='italic'>block scope.</b> Variabel yang dideklarasikan dengan let hanya dapat diakses di dalam blok tempatnya dideklarasikan. Contoh penggunaan let adalah sebagai berikut:</p>
                <pre className='bg-gray-200 my-4 p-4 overflow-scroll text-gray-900 rounded-md'>{`function exampleFunction() {
  let x = 10;
  if (true) {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }
  console.log(y); // Error: y is not defined
}
exampleFunction();
console.log(x); // Error: x is not defined`}</pre>
                <p className='mt-3 text-base text-justify text-gray-700'>Pada contoh di atas, variabel x dan y dideklarasikan menggunakan let. Variabel x dapat diakses di dalam dan di luar blok if, tetapi variabel y hanya dapat diakses di dalam blok if.</p>
            </div>
            <div>
                <h2 className='mt-5 mb-3 text-xl font-semibold'>3. Kata kunci Const</h2>
                <p className='mt-3 text-base text-justify text-gray-700'>Kata kunci const digunakan untuk mendeklarasikan variabel yang nilainya tetap atau konstan. Setelah variabel dideklarasikan menggunakan const, nilainya tidak dapat diubah. Variabel yang dideklarasikan dengan const juga memiliki<b className='italic'>block scope.</b> Contoh penggunaan const adalah sebagai berikut:</p>
                <pre className='bg-gray-200 my-4 p-4 overflow-scroll text-gray-900 rounded-md'>{`function exampleFunction() {
  const x = 10;
  if (true) {
    const y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }
  console.log(x); // Output: 10
  console.log(y); // Error: y is not defined
}
exampleFunction();`}</pre>
                <p className='mt-3 text-base text-justify text-gray-700'>Pada contoh di atas, variabel x dan y dideklaraskan menggunakan const. Variabel x dan y memiliki nilai tetap, dan variabel y hanya dapat diakses di dalam blok if.</p>
            </div>
            <h3 className='mt-6 mb-2 font-semibold text-xl'>Kesimpulan</h3>
            <p className='text-justify my-3'>Dalam JavaScript, penggunaan var, let, dan const memiliki perbedaan dalam hal scope dan kemampuan mengubah nilai variabel. Var memiliki function scope dan nilainya dapat diubah. Let memiliki block scope dan nilainya dapat diubah. Const juga memiliki block scope, tetapi nilainya tidak dapat diubah setelah dideklarasikan.</p>
            <p className='text-justify'>Pemilihan kata kunci yang tepat (var, let, atau const) tergantung pada kebutuhan dan lingkup variabel yang akan digunakan dalam program. Dengan memahami perbedaan antara ketiganya, kita dapat membuat kode yang lebih bersih, terstruktur, dan mudah dipelihara.</p>
            <p className='my-5 text-center text-lg text-blue-600'>Thanks for reading ✌️</p>
        </article>
    )
}
