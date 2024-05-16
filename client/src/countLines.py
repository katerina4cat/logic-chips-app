import os
import traceback
import heapq

YELLOW = "\u001b[33m"
PURPLE = "\u001b[1;35m"
CYAN = "\u001b[36m"
RESET = "\u001b[0m"
TOP_FILES = 10

def count_lines_in_file(file_path):
    with open(file_path, 'r', encoding="utf-8") as file:
        return [len(line) for line in file]

def count_lines_in_directory(directory_path):
    totalLinesCss, totalLinesTs, totalFilesCss, totalFilesTs, totalLines, totalSymbols = 0, 0, 0, 0, 0, 0
    maxHeap = []
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file == "countLines.py":
                pass
            file_path = os.path.join(root, file)
            try:
                line_count = count_lines_in_file(file_path)
                if file_path.endswith("css"):
                    totalLinesCss += len(line_count)
                    totalFilesCss += 1
                elif file_path.endswith("tsx") or file_path.endswith("ts"):
                    totalLinesTs += len(line_count)
                    totalFilesTs += 1
                totalLines += len(line_count)
                totalSymbols += sum(line_count)
                # Добавляем файл в кучу
                heapq.heappush(maxHeap, (len(line_count), file ))
                # Если размер кучи больше 5, удаляем минимальный элемент
                if len(maxHeap) > TOP_FILES:
                    heapq.heappop(maxHeap)
            except UnicodeDecodeError:
                traceback.print_exc()
                print(f'Не удалось прочитать файл {file_path}.')
    print(f"""
{CYAN}Статистика проекта:{RESET}

{RESET}Всего = {YELLOW}{totalLines}{RESET} {CYAN}строк
{RESET}Всего{RESET} = {YELLOW}{totalSymbols} {CYAN}символов
{RESET}Файлов {PURPLE}css{RESET} = {YELLOW}{totalFilesCss}{RESET} в них {YELLOW}{totalLinesCss} {CYAN}строк
{RESET}Файлов {PURPLE}ts{RESET} = {YELLOW}{totalFilesTs}{RESET} в них {YELLOW}{totalLinesTs} {CYAN}строк
{RESET}Итого: {YELLOW}{totalFilesTs + totalFilesCss} {CYAN}файлов{RESET} в них {YELLOW}{totalLinesCss + totalLinesTs} {CYAN}строк
{RESET}Среднее кол-во: {YELLOW}{format((totalLinesCss + totalLinesTs)/(totalFilesTs + totalFilesCss), ".2f")} {CYAN}строк{RESET}, {YELLOW}{format(totalSymbols/(totalFilesTs + totalFilesCss), ".2f")} {CYAN}символов{RESET}
""")
    # Выводим топ-5 файлов с максимальным количеством строк
    top = []
    maxFileName = 0
    while maxHeap:
        top.append(heapq.heappop(maxHeap))
        maxFileName = max(maxFileName, len(top[-1][1]))
    top.reverse()
    for position in top:
        print(f'Файл {PURPLE}{position[1].rjust(maxFileName)}{RESET} содержит {YELLOW}{position[0]}{RESET} строк.')

if __name__ == "__main__":
    count_lines_in_directory('.')

