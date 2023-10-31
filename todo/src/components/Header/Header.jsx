import React from 'react';
import styles from './Header.module.css'

export default function Header({filters, filter, onFilterChange}) {
    return (
      <header className={styles.header}>
        <ul className={styles.filters}>
          {filters.map((value, index) => (
            <li key={index}>
              <button
                className={`${styles.filter} ${
                    filter === value && styles.selected
                    // 전달된 filter의 값이 버튼의 값이 같다면 'selected' className 추가
                }`}
                onClick={() => onFilterChange(value)}
                >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </header>
    );
}