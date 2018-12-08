#!/bin/bash

#			<change this part>
name_space="sos_rs"
starting=1
number_of_robots=4
xs=(40 45 50 55)
ys=(0 0 0 0)
#			</change this part>
CATKIN_SHELL=bash
path="$(pwd)"
for (( i=0; i<3; i++))
do
	path="$(dirname "$path")"
done
# source setup.sh from same directory as this file
_CATKIN_SETUP_DIR="$path/devel"
. "$_CATKIN_SETUP_DIR/setup.sh"
ending=$starting+$number_of_robots-1
for (( i=$starting; i<=$ending; i++))
do
	roslaunch "$(pwd)/robot_spawn.launch" robot_name:=/"$name_space$i" xcoordinate:=${xs[$i]} ycoordinate:=${ys[$i]} &
done
