#!/bin/sh

if [ -n "$DESTDIR" ] ; then
    case $DESTDIR in
        /*) # ok
            ;;
        *)
            /bin/echo "DESTDIR argument must be absolute... "
            /bin/echo "otherwise python's distutils will bork things."
            exit 1
    esac
    DESTDIR_ARG="--root=$DESTDIR"
fi

echo_and_run() { echo "+ $@" ; "$@" ; }

echo_and_run cd "/home/s1/catkin_ws/src/RoboCupap2018RVRL_Demo-master/src/victim175"

# ensure that Python install destination exists
echo_and_run mkdir -p "$DESTDIR/home/s1/catkin_ws/src/RoboCupap2018RVRL_Demo-master/install/lib/python2.7/dist-packages"

# Note that PYTHONPATH is pulled from the environment to support installing
# into one location when some dependencies were installed in another
# location, #123.
echo_and_run /usr/bin/env \
    PYTHONPATH="/home/s1/catkin_ws/src/RoboCupap2018RVRL_Demo-master/install/lib/python2.7/dist-packages:/home/s1/catkin_ws/src/RoboCupap2018RVRL_Demo-master/build/lib/python2.7/dist-packages:$PYTHONPATH" \
    CATKIN_BINARY_DIR="/home/s1/catkin_ws/src/RoboCupap2018RVRL_Demo-master/build" \
    "/usr/bin/python" \
    "/home/s1/catkin_ws/src/RoboCupap2018RVRL_Demo-master/src/victim175/setup.py" \
    build --build-base "/home/s1/catkin_ws/src/RoboCupap2018RVRL_Demo-master/build/victim175" \
    install \
    $DESTDIR_ARG \
    --install-layout=deb --prefix="/home/s1/catkin_ws/src/RoboCupap2018RVRL_Demo-master/install" --install-scripts="/home/s1/catkin_ws/src/RoboCupap2018RVRL_Demo-master/install/bin"
