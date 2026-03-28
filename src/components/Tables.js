import React from 'react';
import './Tables.css';

const Tables = () => {
    const tableData = [
        { title: "Навыки", rows: ["React", "JavaScript", "HTML/CSS", "Node.js", "Git", "Responsive Design"] },
        { title: "Опыт", rows: ["2023 - настоящее: Фриланс", "2022 - 2023: Стажировка", "2021: Курсы", "2020: Университет", "2019: Первый проект", "2018: Начало"] },
        { title: "Достижения", rows: ["Создал 10+ проектов", "Участие в хакатонах", "Сертификаты", "Open Source вклад", "Менторство", "Статья на Habr"] }
    ];

    return (
        <div className="tables-container">
            {tableData.map((table, idx) => (
                <div key={idx} className={`table-wrapper ${idx === 1 ? 'middle-table' : ''}`}>
                    <table>
                        <thead>
                            <tr>
                                <th>{table.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.rows.map((row, i) => (
                                <tr key={i}>
                                    <td>{row}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default Tables;