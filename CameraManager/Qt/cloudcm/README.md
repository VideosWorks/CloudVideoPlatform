# VXGCloudCamera (Qt)

## Requirements build

* qt >= 5.4
* libqt5websockets5
* libqt5websockets5-dev
* ffmpeg

## Installation for Debian/Ubuntu

	$ sudo apt install qt5-default libqt5websockets5 libqt5websockets5-dev
	
Also please install ffmpeg

## Build

	$ qmake && make
	
## Configure

Please look file: vxgcloudcamera.ini

## Run

	$ ./bin/vxgcloudcamera
	
After run you can see session parameters in file vxgcloudcamera.session.ini

