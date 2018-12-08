#!/bin/bash

#			<change this part>
name_space="robot"
starting=0
number_of_robots=4
xs=(0 10 20 30)
ys=(0 0 0 0)
#			</change this part>



source ./../../../devel/setup.bash
ending=$starting+$number_of_robots-1
for (( i=$starting; i<=$ending; i++))
do
	echo "$name_space$i"
	echo "${xs[$i]},${ys[$i]}"
	roslaunch robot_description robot_spawn robot_name:=/"$name_space$i" xcoordinate:=${xs[$i]} ycoordinate:=${ys[$i]}
done
