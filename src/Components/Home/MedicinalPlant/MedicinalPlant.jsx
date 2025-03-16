import React from 'react'
import './MedicinalPlant.css'
import './mediaMedicinalPlant.css'
import ContentMedicinalPlant from './ContentMedicinalPlant/ContentMedicinalPlant'

export default function MedicinalPlant() {

    let MedicinalPlantContentInfos = [
        { id: 1, title: 'چک کردن اسید خاک', desc: 'با استفاده از ابزار مخصوص اسید خاک گیاه چک میشود' },
        { id: 2, title: 'برسی مواد معدنی خاک', desc: 'یکی از موارد مهم خاک، مقدار مواد معدنی آن است که با دقت برسی میشود' },
        { id: 3, title: 'مشاهده بهترین دما', desc: 'از موارد مهم برای گیاه مقدار دمای محیط است که باید اندازه گیری شود' },
        { id: 4, title: 'برسی آسیب ها', desc: 'تمامی آسیب های احتمالی برسی میگردد تا از وقوع مشکلات آینده جلوگیری شود' },
        { id: 5, title: 'از بین بردن عناصر آلوده', desc: 'با استفاده از روش های نوین،عناصر آلوده از خاک گیاهان شما جمع آوری میشوند' },
        { id: 6, title: 'برسی ظاهر', desc: 'ظاهر گیاه بیانگر مسائل مهمی هست.میتوان با مشاهده ظاهر گیاه آفات' },
        { id: 7, title: 'اندازه گیری EC ', desc: 'این اندازه گیری نشانی از مقدار کل مواد مغذی موجود برای گیاهان می‌دهد' },
        { id: 8, title: 'ارائه مکمل ', desc: 'برای رشد بهتر گیاهان و رفع آفات از مکمل ها میتوان استفاده کرد' },
    ]

    return (
        <div className='container'>
            <div className="container-medicinal-plant">
                <h1 className="title-section-medicinal-plant">خدمات گیاه پزشکی </h1>
                <div className="container-content-medicinal-plant">
                    {MedicinalPlantContentInfos.map(MedicinalPlantContentInfo => (
                        <ContentMedicinalPlant title={MedicinalPlantContentInfo.title} desc={MedicinalPlantContentInfo.desc} />
                    ))}
                </div>
            </div>
        </div>
    )
}
