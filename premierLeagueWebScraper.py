from bs4 import BeautifulSoup
from unidecode import unidecode
import pandas as pd
import requests
import time

all_teams = []

html = requests.get("https://fbref.com/en/comps/9/Premier-League-Stats").text
soup = BeautifulSoup(html, "lxml");

table = soup.find_all('table', class_ = 'stats_table')[0]

links = table.find_all('a')
links = [l.get("href") for l in links]
links = [l for l in links if "/squads" in l]

team_urls = [f"https://fbref.com{l}" for l in links]

selected_columns = ['Player', 'Nation', 'Pos', 'Age', 'MP', 'Starts', 'Min', 'Gls', 'Ast', 'PK', 'CrdY', 'CrdR', 'xG', 'xAG']

for team_url in team_urls:
    team_name = team_url.split("/")[-1].replace("-Stats","")
    data = requests.get(team_url).text
    soup = BeautifulSoup(data, "lxml")
    stats = soup.find_all("table", class_ = "stats_table")[0]

    #if stats and stats.columns:
    #stats.columns = stats.columns.droplevel()

    # read html
    team_data = pd.read_html(str(stats))[0]

    # removing top multi index header
    team_data.columns = team_data.columns.get_level_values(1)

    # filtering out squad and opponent total rows since they are not players
    team_data = team_data[~team_data['Player'].str.contains('Squad Total|Opponent Total')]

    # removing accent from player names
    team_data['Player'] = team_data['Player'].apply(unidecode)

    # removing everything after the dash in the age column
    team_data['Age'] = team_data['Age'].str.split('-').str[0]

    # dropping duplicate rows and reseting index back to a 0 count
    team_data_subset = team_data.loc[:, ~team_data.columns.duplicated()][selected_columns]

    # adding the team column
    team_data_subset["Team"] = team_name

    # appending this team player data to all teams table
    all_teams.append(team_data_subset)

    # avoiding broadband issues
    time.sleep(5)

print(all_teams)

stat_df = pd.concat(all_teams)
stat_df.to_csv("stats.csv", index = False)
