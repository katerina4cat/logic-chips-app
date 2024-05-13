import os

def count_lines_in_file(file_path):
    with open(file_path, 'r') as file:
        return [len(line) for line in file]

def count_lines_in_directory(directory_path):
    totalLinesCss, totalLinesTs, totalFilesCss, totalFilesTs, totalLines = 0, 0, 0, 0, 0
    totalSumbols = 0
    maxLines, maxLinesFile = 0, ""
    for root, dirs, files in os.walk(directory_path):
        for file in files:
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
                totalSumbols += sum(line_count)
                if maxLines<len(line_count):
                    maxLines = len(line_count)
                    maxLinesFile = file_path
            except UnicodeDecodeError:
                print(f'Не удалось прочитать файл {file_path}.')
    print(f"""
Всего строк = {totalLines-31}
Всего символов = {totalSumbols-1379}
Файлов css = {totalFilesCss} в них {totalLinesCss} строк
Файлов ts = {totalFilesTs} в них {totalLinesTs} строк
Того файлов {totalFilesTs + totalFilesCss} в них {totalLinesCss + totalLinesTs} строк
Файл с максимальной кол-вом строк {maxLinesFile} - {maxLines} строк
""")

if __name__ == "__main__":
    count_lines_in_directory('.')
